"use client";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Search from "./filters/search";
import ContactTable from "./table";
import Pagination from "./filters/pagination";
import GetContact from "./model/getContacts";
import { useState } from "react";
import HeaderDropdown from "./filters/headerDropdown";
import CustomFilter from "./filters/customFilter";
import { DataType, Table } from "ka-table";

import { EditingMode } from "ka-table/enums";
import FilterControl from "react-filter-control";
import { IFilterControlFilterValue } from "react-filter-control/interfaces";
import { filterData } from "./filterData";
const dataArray: any[] = [
  { id: 1, name: "Mike Wazowski", score: 80, passed: true },
  { id: 2, name: "Billi Bob", score: 55, passed: false },
  { id: 3, name: "Tom Parker", score: 45, passed: false },
  { id: 4, name: "Kurt Cobain", score: 75, passed: true },
  { id: 5, name: "Tom Williams", score: 77, passed: true },
  { id: 6, name: "Sunny Fox", score: 33, passed: false },
  { id: 7, name: "Tom Bruce", score: 67, passed: false },
];
const fields = [
  {
    caption: "Name",
    name: "name",
    operators: [
      {
        caption: "Contains",
        name: "contains",
      },
      {
        caption: "Does not Contain",
        name: "doesNotContain",
      },
    ],
  },
  {
    caption: "Score",
    name: "score",
    operators: [
      {
        caption: "Equals",
        name: "=",
      },
      {
        caption: "Does not Equal",
        name: "<>",
      },
      {
        caption: "More than",
        name: ">",
      },
      {
        caption: "Less than",
        name: "<",
      },
    ],
  },
];

const groups = [
  {
    caption: "And",
    name: "and",
  },
  {
    caption: "Or",
    name: "or",
  },
];
const filter: IFilterControlFilterValue = {
  groupName: "and",
  items: [
    {
      field: "name",
      key: "1",
      operator: "contains",
      value: "Tom",
    },
    {
      field: "score",
      key: "2",
      operator: ">",
      value: "66",
    },
  ],
};
const ContactList = () => {
  const [showMyModal, setShowMyModel] = useState(false);
  const handleOnClose = () => setShowMyModel(false);
  const [filterValue, changeFilter] = useState(filter);
  const onFilterChanged = (newFilterValue: IFilterControlFilterValue) => {
    changeFilter(newFilterValue);
  };
  return (
    <>
      <div className="md:flex md:items-center md:justify-between bg-white my-2 px-6 py-3 shadow-sm">
        <div className="min-w-0 flex-1 items-center flex">
          <h2 className="text-sm font-bold leading-7 sm:truncate sm:text-lg sm:tracking-tight inline-block">
            Contact List
          </h2>
          <HeaderDropdown />
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            onClick={() => setShowMyModel(true)}
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-blue-001 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Get Included Contacts
          </button>
        </div>
      </div>
      <FilterControl
        {...{
          fields,
          groups,
          filterValue,
          onFilterValueChanged: onFilterChanged,
        }}
      />
      <div className="bg-white my-2 px-6 py-3 shadow-sm">
        <div className="relative shadow-md sm:rounded-lg">
          <Table
            columns={[
              { key: "name", title: "Name", dataType: DataType.String },
              { key: "score", title: "Score", dataType: DataType.Number },
              { key: "passed", title: "Passed", dataType: DataType.Boolean },
            ]}
            data={dataArray}
            editingMode={EditingMode.Cell}
            rowKeyField={"id"}
            extendedFilter={(data) => filterData(data, filterValue)}
          />
        </div>
      </div>
      <div>
        <GetContact onClose={handleOnClose} visible={showMyModal} />
      </div>
    </>
  );
};

export default ContactList;
