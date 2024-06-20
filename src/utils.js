export const sum = (a, b) => {
  let add = 0;
  add = a + b;
  return add;
};

export const onAddClick = (name = "", selectedItems = []) => {
  const tempSelectedItems = [...selectedItems];
  const filterData = tempSelectedItems.filter(
    ({ name: selectedName = "", count = "" }) => selectedName === name
  );
  console.log("filterData", filterData);
  if (filterData.length == 0) {
    tempSelectedItems.push({
      name,
      count: 1,
    });
    return tempSelectedItems;
  } else {
    let { count: selectedCount = "" } = filterData?.[0] || {};
    const updatedSelectedItems = selectedItems.map((eachSelectedItem) => {
      if (eachSelectedItem.name === name) {
        return { ...eachSelectedItem, count: selectedCount + 1 };
      }
      return eachSelectedItem;
    });
    return updatedSelectedItems;
  }
};

export const getItem = (name = "", data = []) => {
  const filterData =
    data.filter(({ name: selectedName = "" }) => {
      return name === selectedName;
    })?.[0] || {};
  return filterData;
};

export const eachItemCount = (name = "", selectedItems = []) => {
  const { count = "" } = getItem(name, selectedItems);
  return count || 0;
};

export const onSubtractClick = (name, selectedItems) => {
  if (eachItemCount(name, selectedItems) > 0) {
    const updatedSelectedItems = selectedItems.map(
      ({ name: selectedName = "", count = "" }) => {
        if (selectedName === name) {
          return { name, count: count - 1 };
        } else return { name: selectedName, count };
      }
    );
    return updatedSelectedItems;
  }
};
