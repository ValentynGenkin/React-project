export const saveToShoppingList = (data, groceryList, setGroceryList) => {
  if (!Object.keys(groceryList).includes(data.title)) {
    setGroceryList({
      ...groceryList,
      [data.title]: [
        data.extendedIngredients,
        { id: data.id, image: data.image, title: data.title },
      ],
    });
    const dataToSave = [
      data.extendedIngredients,
      { id: data.id, image: data.image, title: data.title },
    ];

    localStorage.setItem(data.title, JSON.stringify(dataToSave));
  } else {
    const updatedGroceryList = { ...groceryList };
    delete updatedGroceryList[data.title];
    setGroceryList(updatedGroceryList);
    localStorage.removeItem(data.title);
  }
};
