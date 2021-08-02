import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class pagination {

  showPagination(data, rows, environmentRows, first) {
    if (data.length <= 0) {
      return 'Showing <strong>0</strong> to <strong>0</strong> of <strong>' + data.length + '</strong> Records';
    } else {
      if (first < environmentRows) {
        return 'Showing <strong>1</strong> to <strong>' + ((data.length < rows) ? data.length : rows) + '</strong> of <strong>' + data.length + '</strong> Records';
      } else {
        return 'Showing <strong>' + (first + 1) + '</strong> to <strong>' + (first + rows) + '</strong> of <strong>' + data.length + '</strong> Records';
      }
    }
  }

  //function to change pagination
  pagination(e, tableLength, first, rows, data: any = []) {
    let start = (tableLength > 0) ? (e.first + 1) : 0;
    first = e.first;
    rows = e.rows;
    let end = (e.first + e.rows) > tableLength ? tableLength : (e.first + e.rows);
    var pageinationcount = "";
    if (tableLength != data.length) {
      pageinationcount = 'Showing <strong>' + start + '</strong> to <strong>' + end + '</strong> of <strong>' + tableLength + '</strong> Records (filtered from <strong>' + data.length + '</strong> total Records)';
    } else {
      pageinationcount = 'Showing <strong>' + start + '</strong> to <strong>' + end + '</strong> of <strong>' + tableLength + '</strong> Records';
    }
    return [{ pageinationcount: pageinationcount, tableLength: tableLength, first: first, rows: rows }];
  }

  changePagination(e, tableLength, first, rows, data) {
    var pageinationcount = "";
    if (e.filters && Object.keys(e.filters).length > 0) {
      first = 0;
      tableLength = e.filteredValue.length;
      let start = (tableLength > 0) ? (first + 1) : 0;
      let end = (first + rows) > tableLength ? tableLength : (first + rows);
      pageinationcount = 'Showing <strong>' + start + '</strong> to <strong>' + end + '</strong> of <strong>' + tableLength + '</strong> Records (filtered from <strong>' + data.length + '</strong> total Records)';
    } else {
      first = 0;
      tableLength = data.length;
      let start = (tableLength > 0) ? (first + 1) : 0;
      let end = (first + rows) > tableLength ? tableLength : (first + rows);
      pageinationcount = 'Showing <strong>' + start + '</strong> to <strong>' + end + '</strong> of <strong>' + tableLength + '</strong> Records';
    }
    return [{ pageinationcount: pageinationcount, tableLength: tableLength, first: first, rows: rows }];

  }



  commonFilterChange(event, field, columnArray, filterListArray, allFilterData, filterDataArray, dataArray) {

    var filter: any = [];
    var filterList = [];
    columnArray.forEach((val) => {
      filter[val['field']] = [];
      filterList[val['field']] = [];
    });

    var count = 0;
    var singlefield = '';
    columnArray.forEach((element) => {
      if (filterDataArray[element['field']] && filterDataArray[element['field']].length > 0) {
        count = count + 1;
        singlefield = element['field'];
      }
    });

    if (count > 0 && event != '') {
      var firstFilter = dataArray.filter((val) => {
        return ((event).indexOf(val[field]) > -1);
      }).map((val) => {
        return val;
      });
    } else {
      var firstFilter = dataArray;
    }

    columnArray.forEach((element) => {
      if (filterDataArray[element['field']] != '' && count > 0) {
        filter[element['field']] = firstFilter.filter((val) => {
          if (val[element['field']] && filterDataArray[element['field']]) {
            return ((filterDataArray[element['field']]).indexOf(val[element['field']]) > -1) ? true : false;
          }
        }).map((val) => {
          return val;
        });
      } else {
        if (count == 0) {
          filter[element['field']] = dataArray.map((val) => {
            return val;
          });
        }
      }
    });


    var filterData: any = [];
    columnArray.forEach((val) => {
      if (filter[val['field']] && filter[val['field']].length > 0) {
        (filter[val['field']]).forEach((element) => {
          filterData.push(element);
        });
      }
    });


    filterData.forEach((element) => {
      columnArray.forEach((val) => {
        filterList[val['field']].push(element[val['field']]);
      })
    })


    columnArray.forEach((element) => {
      if (filterList[element['field']] != void (0)) {
        var tempData = [];
        var templist = [];
        let value = Array.from(new Set(filterList[element['field']]));

        if (typeof (value[0]) === 'string') {
          value.sort();
        }

        if (typeof (value[0]) === 'number') {
          value.sort((a: any, b: any) => {
            return a - b;
          });
        }

        value.forEach((val) => {
          tempData.push({ label: val, value: val });
          templist.push(val)
        });
        if (field != element['field'] || filterDataArray[element['field']] == '') {
          filterListArray[element['field']] = tempData;
        }

        var filteredData = [];
        if (filterDataArray[element['field']]) {
          filteredData = filterDataArray[element['field']].filter((val) => {
            return templist.indexOf(val) > -1
          });
        }
        filterDataArray[element['field']] = filteredData;

      } else {
        if (field != element['field']) {
          filterListArray[element['field']] = [];
        }
      }
    });

    if (count == 1) {
      if (field != singlefield) {
        filterListArray[singlefield] = allFilterData[singlefield].map((val) => {
          return { label: val[singlefield], value: val[singlefield] };
        });
      }
    }
    return

  }

  charRemaining(fieldLength, limit, field) {
    var result = (limit - fieldLength.length) < 0 ? 0 : (limit - fieldLength.length);
    return field = 'Characters Remaining: <strong>' + result + '</strong>';
  }

}
