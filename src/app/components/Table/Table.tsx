"use client"
import styles from "./Table.module.scss";
import productsData from '../../../../public/products_search_result.json';
import { useState } from 'react';
import { Table, Pagination, Select, Center, Group} from '@mantine/core';
import { chunk } from '@/utils/chunk';
import ProductRow from '../ProductRow/ProductRow';

interface Product {
  DT_RowId: string;
  image: string;
  amazon_title: string;
  category_name: string;
  match_type: string;
  percentage: number | string;
  profit: number | string;
  fees: number | string;
  price: number | string;
  salesEstimates: number | string;
}

export default function ProductsTable() {
  const [activePage, setPage] = useState(1);
  const [matchFilter, setMatchFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  let filteredData = productsData.data;

  
  if (matchFilter) {
    filteredData = filteredData.filter((item) => item.match_type === matchFilter);
  }

  if (sortBy) {
    filteredData = [...filteredData].sort((a, b) => {
      const key = sortBy as keyof Product;
      const valA = parseFloat(a[key] as string); 
      const valB = parseFloat(b[key] as string);
      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });
  }

  const data = chunk(filteredData, 20);

  return (
    <div>
      <Group>
        <Select
          label="Filter by match type"
          placeholder="Filter by match type"
          data={[{ value: 'Barcode', label: 'Barcode' }, { value: 'Title', label: 'Title' }]}
          value={matchFilter}
          onChange={setMatchFilter}
        />

        <Select
          label="Sort by"
          placeholder="Sort by"
          data={[{ value: 'percentage', label: 'ROI' }, { value: 'profit', label: 'Profit' }, { value: 'salesEstimates', label: 'Sales' }]}
          value={sortBy}
          onChange={setSortBy}
        />

        <Select
          label="Sort order"
          placeholder="Sort order"
          data={[{ value: 'asc', label: 'Ascending' }, { value: 'desc', label: 'Descending' }]}
          value={sortOrder}
          onChange={(value) => setSortOrder(value as 'asc' | 'desc')}
        />
      </Group>

      <Table className={styles.table}>
        <thead>
          <Table.Tr></Table.Tr>
        </thead>
        <tbody>{data[activePage - 1]?.map(item => <ProductRow key={item.DT_RowId} item={item} />)}</tbody>
      </Table>

      <Center>
        <Pagination
          total={data.length}
          value={activePage}
          onChange={setPage}
          className={styles.pagination}
        />
      </Center>
    </div>
  );
}
