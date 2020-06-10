//import React, { Component } from "react";

class mealgetClass {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  fittler() {
    const queryObj = { ...this.queryStr };
    // let queryr = JSON.stringify(queryObj);

    // const excludedFields = ["page", "sort", "limit", "fields"];
    // excludedFields.forEach((el) => delete queryObj[el]);
    console.log(queryObj, "kll");
    console.log(this.query);
    this.query = this.query.find(this.queryObj);
    // let query = AddVender.find(queryObj);
    console.log(this.query);
    return this;
  }
}

module.exports = mealgetClass;
