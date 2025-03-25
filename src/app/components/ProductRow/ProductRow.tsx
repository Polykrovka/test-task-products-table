"use client"
import { Table, Text, Image } from '@mantine/core';
import styles from "./ProductRow.module.scss";

interface ProductRowProps {
  item: {
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
  };
}

export default function ProductRow({ item }: ProductRowProps) {
  return (
    <Table.Tr>
      <Table.Td>
        <Image src={item.image} alt={item.amazon_title} w={160} h={160} className={styles.image} />
      </Table.Td>
      <Table.Td>
        <Text>{item.amazon_title}</Text>
        <br />
        <Text>Category: {item.category_name}</Text>
        <Text>Match type: {item.match_type}</Text>
      </Table.Td>
      <Table.Td className={styles.td_info}>
        <Text>ROI: {item.percentage}%</Text>
        <Text>Profit: {item.profit}$</Text>
        <Text>Fees: {item.fees}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Sales: {item.salesEstimates}</Text>
      </Table.Td>
    </Table.Tr>
  );
}