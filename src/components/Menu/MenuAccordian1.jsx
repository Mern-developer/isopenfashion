import React from 'react'
import CustomAccordian from '../Accordian/CustomAccordian'
import MenuFooter from './MenuFooter'

const MenuAccordian1 = () => {
  return (
<>
<CustomAccordian title='New' list1='All' list2='Apprael' list3='Blouse' list4='Kids' list5='Men' />
<CustomAccordian title='Apprael' list1='All' list2='Apprael' list3='Blouse' list4='Kids' list5='Men' />
<CustomAccordian title='Bag' list1='All' list2='Apprael' list3='Blouse' list4='Kids' list5='Men' />
<CustomAccordian title='Shoes' list1='All' list2='Apprael' list3='Blouse' list4='Kids' list5='Men' />
<CustomAccordian title='Beauty' list1='All' list2='Apprael' list3='Blouse' list4='Kids' list5='Men' />
<CustomAccordian title='Accessories' list1='All' list2='Apprael' list3='Blouse' list4='Kids' list5='Men' />
<MenuFooter />

</>
    )
}

export default MenuAccordian1