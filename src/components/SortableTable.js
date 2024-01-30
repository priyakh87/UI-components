import { Fragment } from "react";
import Table from "./Table";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(
    config,
    data
  );
  const updatedConfig = config.map((item) => {
    if (!item.sortValue) {
      return item;
    }

    return {
      ...item,
      header: () => (
        <Fragment key={item.label}>
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(item.label)}
          >
            <div className="flex item-center">
              {item.label}
              {getIcons(item.label, sortOrder, sortBy)}
            </div>
          </th>
        </Fragment>
      ),
    };
  });

  //

  return (
    <div>
      {sortBy}-{sortOrder}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

function getIcons(label, sortOrder, sortBy) {
  if (sortBy !== label) {
    return (
      <div>
        <FaSortUp />
        <FaSortDown />
      </div>
    );
  }
  if (sortBy === label) {
    if (sortOrder === "asc") {
      return (
        <div>
          <FaSortUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <FaSortDown />
        </div>
      );
    } else {
      return (
        <div>
          <FaSortUp />
          <FaSortDown />
        </div>
      );
    }
  }
}
export default SortableTable;
