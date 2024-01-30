import { useState } from "react";

export default function useSort(config, data) {
  //note sort order will change in cycle like this null=>'asc'=>'desc'=>null
  const [sortOrder, setSortOrder] = useState(null);
  //note sortBy value will change in cycle like null=>clicked header label value like 'name','price',etc

  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //steps for sorting data
  //1.only sort data if sortBy and sortOrder are not null
  //2. create a copy of data as in react objects are immutable(Objects that can't be modified after creation)
  //3.find the correct sortValue function and use for sorting a table
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((item) => item.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);
      console.log(valA, valB);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valA === "string") {
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    setSortColumn,
    sortedData,
  };
}
