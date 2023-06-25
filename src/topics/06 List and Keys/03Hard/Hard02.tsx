// Render a nested list of categories and subcategories using recursive rendering.

import React from "react";

interface Category {
  id: number;
  name: string;
  subcategories?: Category[];
}

const CategoryList: React.FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          {category.name}
          {category.subcategories && (
            <CategoryList categories={category.subcategories} />
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Category 1",
      subcategories: [
        { id: 11, name: "Subcategory 1.1" },
        { id: 12, name: "Subcategory 1.2" },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      subcategories: [
        { id: 21, name: "Subcategory 2.1" },
        {
          id: 22,
          name: "Subcategory 2.2",
          subcategories: [
            { id: 221, name: "Subcategory 2.2.1" },
            { id: 222, name: "Subcategory 2.2.2" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h2>Categories</h2>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
