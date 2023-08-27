"use client";
import GetContact from "./model/getContacts";
import { use, useEffect, useState } from "react";
import HeaderDropdown from "./filters/headerDropdown";
import { DataType, Table } from "ka-table";
import { SortingMode, PagingPosition } from "ka-table/enums";
import FilterControl from "react-filter-control";
import { IFilterControlFilterValue } from "react-filter-control/interfaces";
import { filterData } from "./filterData";

export const fields = [
  {
    caption: "First Name",
    name: "FirstName",
    operators: [
      {
        caption: "Contains",
        name: "contains",
      },
      {
        caption: "Does Not Contain",
        name: "doesNotContain",
      },
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
  {
    caption: "Last Name",
    name: "LastName",
    operators: [
      {
        caption: "Contains",
        name: "contains",
      },
      {
        caption: "Does Not Contain",
        name: "doesNotContain",
      },
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
  {
    caption: "Account",
    name: "Account",
    operators: [
      {
        caption: "Contains",
        name: "contains",
      },
      {
        caption: "Does Not Contain",
        name: "doesNotContain",
      },
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
  {
    caption: "RingLead Score",
    name: "RingLeadScore",
    operators: [
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

export const groups = [
  {
    caption: "And",
    name: "and",
  },
  {
    caption: "Or",
    name: "or",
  },
];
export const filter: IFilterControlFilterValue = {
  groupName: "and",
  items: [], 
};
const ContactList = () => {
  const [searchText, setSearchText] = useState("");
  const [showMyModal, setShowMyModel] = useState(false);
  const handleOnClose = () => setShowMyModel(false);
  const [filterValue, changeFilter] = useState(filter);
  const onFilterChanged = (newFilterValue: IFilterControlFilterValue) => {
    changeFilter(newFilterValue);
  };
  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/contacts");
      const data = await response.json();
      setContacts(data.body.contacts);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="md:flex md:items-center md:justify-between bg-white my-2 px-6 py-3 shadow-sm">
        <div className="min-w-0 flex-1 items-center flex">
          <h2 className="text-sm font-bold leading-7 sm:truncate sm:text-lg sm:tracking-tight inline-block">
            Contact List
          </h2>
          <HeaderDropdown filterVal={filterValue} />
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

      <div className="bg-white my-2 px-6 py-3 shadow-sm">
        <FilterControl
          {...{
            fields,
            groups,
            filterValue,
            onFilterValueChanged: onFilterChanged,
          }}
        />
        <div>
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center justify-between">
              <label className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search"
                  value={searchText}
                  onChange={(event) => {
                    setSearchText(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative shadow-md sm:rounded-lg">
       
          <Table 
            columns={[
              { key: "Account", title: "Account", dataType: DataType.String },
              {
                key: "FirstName",
                title: "First Name",
                dataType: DataType.String,
              },
              {
                key: "LastName",
                title: "Last Name",
                dataType: DataType.String,
              },
              {
                key: "RingLeadScore",
                title: "RingLead Score",
                dataType: DataType.String,
              },
            ]}
            data={
              contacts &&
              contacts.map((contact: any) => {
                return {
                  id: contact.id,
                  Account: contact.Account?.Name,
                  FirstName: contact.FirstName,
                  LastName: contact.LastName,
                  RingLeadScore: contact.RingLead_Score__c,
                };
              })
            }
            // editingMode={EditingMode.Cell}
            rowKeyField={"id"}
            extendedFilter={(data) => filterData(data, filterValue)}
            search={({ searchText: searchTextValue, rowData, column }) => {
              if (column.key === "passed") {
                return (
                  (searchTextValue === "false" && !rowData.passed) ||
                  (searchTextValue === "true" && rowData.passed)
                );
              }
            }}
            searchText={searchText}
            sortingMode={SortingMode.Single}
            paging={{
              enabled: true,
              pageIndex: 0,
              pageSize: 10,
              pageSizes: [5, 10, 15],
              position: PagingPosition.Bottom,
            }}
          />
          
        </div>
      </div>
      <div>
        <GetContact onClose={handleOnClose} visible={showMyModal}  filterVal={filterValue}/>
      </div>
    </>
  );
};

export default ContactList;
