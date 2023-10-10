import { Button, Container } from 'react-bootstrap';
import { useShoppingList } from '../Context/ShoppingListContext';
import { saveToShoppingList } from '../JSFunction/saveToShoppingList';

import Title from './Title';
import LoadingSpinner from './LoadingSpinner';

import '../CSS/ShoppingList.css';

import { Link } from 'react-router-dom';

function ShoppingList() {
  const { groceryList, setGroceryList } = useShoppingList();

  const { checkedItems, setCheckedItems } = useShoppingList({});

  const handleItemCheck = (itemId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };

  return (
    <Container className="shopping-list-container">
      <Title text={'Shopping list'} />
      {Object.keys(groceryList).length === 0 ? (
        <p className="empty-list h3">Shopping list empty</p>
      ) : groceryList ? (
        Object.keys(groceryList).map((recipeKey) => {
          const recipe = groceryList[recipeKey];
          return (
            <div key={recipe[1].id}>
              <div className="title">
                <p className="h4">{recipe[1].title}</p>

                <Button
                  className="shopping-list-button"
                  variant="outline-success"
                  as={Link}
                  to={`/shopping-list/resource?id=${recipe[1].id}`}
                >
                  Full information
                </Button>
                <Button
                  className="shopping-list-button"
                  variant="outline-danger"
                  onClick={() => {
                    saveToShoppingList(recipe[1], groceryList, setGroceryList);
                  }}
                >
                  Delete
                </Button>
              </div>
              <ul className="items-list">
                {recipe[0].map((item) => (
                  <li
                    className={checkedItems[item.id] ? 'checked item' : 'item'}
                    key={item.id}
                  >
                    {`${item.name} - ${parseInt(item.measures.metric.amount)} ${
                      item.measures.metric.unitShort
                    }`}
                    <img
                      className="item-list-img"
                      src={'/assets/purchase.png'}
                      alt="basket"
                      onClick={() => {
                        handleItemCheck(item.id);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
}
export default ShoppingList;
