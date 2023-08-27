"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CreateNewPermission = () => {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between bg-white my-2 px-6 py-3 shadow-sm">
        <div className="min-w-0 flex-1">
          <h2 className="text-sm leading-7 sm:truncate sm:text-lg sm:tracking-tight">
            Create Permission
          </h2>
        </div>
      </div>

      <div className="bg-white my-2 px-4 py-3 shadow-sm m-3">
        <div className="grid grid-cols-1">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
             Permission Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="assets"
                id="mapName"
                className="block w-full custom-height rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="--/--/--"
                // value={mapName}
                // onChange={handleMapNameChange}
              />
            </div>
          </div>

          
        </div>

              <div className="mt-5 sm:mt-4 sm:flex justify-end col-span-2">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-md bg-blue-001 mr-4 px-4 py-2 text-xs text-white shadow-sm"
                // onClick={() => {
                //   handleClickfor2ndpage();
                //   nextStep();
                // }}
              >
                Submit
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-4 py-2 text-xs text-gray-700 shadow-sm"
                // onClick={() => {
                //   prevStep();
                // }}
              >
                back
              </button>
            </div>
      </div>
    </>
  );
};

export default CreateNewPermission;
