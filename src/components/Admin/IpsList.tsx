import * as React from "react";
import { Table, Button } from 'antd';
import * as querystring from 'querystring';

const columns = [{
        title: 'ip',
        dataIndex: 'ip'
    },
    {
        title: 'area',
        dataIndex: 'area'
    },
    {
        title: 'city',
        dataIndex: 'city'
    },
    {
        title: 'country',
        dataIndex: 'country'
    },
    {
        title: 'county',
        dataIndex: 'county'
    },
    {
        title: 'isp',
        dataIndex: 'isp'
    },
    {
        title: 'region',
        dataIndex: 'region'
    }
];

const data: any = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

interface IpsListProps {};
interface IpsListState {};

export class IpsList extends React.Component<IpsListProps, IpsListState> {
    constructor (props:any) {
        super(props);
        this.state = {
            data: [],
            selectedRowKeys: [],
            pagination: {
                pageSize: 10
            },
            loading: false
        }
    }

    state: any;

    start = () => {
        
    }

    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    handleTableChange = (pagination: any, filters: any, sorter: any) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.getData({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    getData = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        const query = querystring.stringify({
            results: this.state.pagination.pageSize,
            ...params,
        })
        fetch('/api/ips/?' + query)
        .then(response => response.json())
        .then((data: any) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            pagination.total = data.totalCount;
            this.setState({
                loading: false,
                data: data.data,
                pagination
            });
        });
    }

    componentDidMount () {
        this.getData();
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >Reload</Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    rowKey={(record: any) => record._id}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>
        );
    }
};
