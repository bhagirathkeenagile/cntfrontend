import React from "react";
import { Fragment, useState,useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
const baseUrl = "http://localhost:5002";
export default function GetContact({ visible, onClose, filterVal }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const convertToNewFormat = (data) => {
    console.log('data',data);
    if (data.groupName === 'and') {
      const newAnd = {};
      data.items.forEach((item) => {
        newAnd[item.field] = {
          [item.operator]: item.value,
        };
      });
      return newAnd;
    } else if (data.groupName === 'or') {
      return {
        OR: data.items.map((item) => convertToNewFormat(item)),
      };
    } else {
      return {};
    }
  };
  
  
  if (!visible) return null;
  const [employee, setemployee] = useState('');

  const handleemployee = (e) => {
    setemployee(e.target.value);
  };
  const [count, setcount] = useState('');

  const handlecount = (e) => {
    setcount(e.target.value);
  };
 
  const exportcontact = () => {
    try {
      const currentDateTime = new Date().toISOString();
      const formattedDateTime = new Date(currentDateTime).toISOString();
      console.log('formattedDateTime',formattedDateTime);
    const convertedData = convertToNewFormat(filterVal);
    const newconverteddata = JSON.stringify(convertedData).replace('RingLeadScore', 'RingLead_Score__c').replace('>', 'gt').replace('<', 'lt');
    console.log('convertedData',newconverteddata);
    async function fetchData() {
      const config = {
        headers: {
          'employeePercentageRequest':employee,
          'minimumCount':count,
          'filterval': newconverteddata ,
        },
      };
      
      const response = await axios.get(`${baseUrl}/jobs/rankings`, config);
      console.log('response',response.data);
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Contacts_'+currentDateTime+'.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      console.log('convertToNewFormat',convertedData);      
    }
    fetchData();
  } catch (error) {
    console.error('Error downloading Excel file:', error);
  }
  }
  return (
    <>
      <div id="container" onClick={handleOnClose}>
        <div className="relative z-50">
          <div>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </div>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-start sm:p-0">
              <div>
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                    <div className="text-left px-6 py-4">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        Export Contacts
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="text-left px-6 py-4 grid grid-cols-2 gap-4">
                    <div className="w-60">
                      <label
                        htmlFor="employee"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Employee %
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="employee"
                          id="employee"
                          className="block w-full rounded-md px-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.02"
                          onChange={handleemployee}
                        />
                      </div>
                    </div>
                    <div className="w-60">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Minimum Count
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="count"
                          id="count"
                          className="block w-full rounded-md px-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="200"
                          onChange={handlecount}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse pb-6 pr-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-001 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                       onClick={exportcontact}
                    >
                      Export
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
