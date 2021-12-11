import * as React from 'react';
import CardInfoHeader from './Card'
import { useGetList } from 'ra-core';



const Accueil = () => {
  const Userlist =  useGetList('users')
  const Categorieslist =  useGetList('categories')
  const SubCategorieslist =  useGetList('sub_categories')
  const Productslist =  useGetList('products')
    return (
        <>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:"space-around" }}>
                <CardInfoHeader color="#00bcd4" ressource={Productslist} title= 'Products'/>
                <CardInfoHeader color="#3f51b5" ressource={Categorieslist} title= 'Categories'/>
                <CardInfoHeader color="#9c27b0" ressource={SubCategorieslist} title= 'Sub Categories'/>
                <CardInfoHeader color="#f44336" ressource={Userlist} title= 'Users'/>
            </div>
        </>
    )
}
export default Accueil;


