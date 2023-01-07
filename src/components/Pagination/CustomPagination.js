import React from 'react'
import ReactPaginate from 'react-paginate'

const CustomPagination = ({onPageChange, pageCount}) => {
  return (
    <>

    <ReactPaginate
    breakLabel="..."
    nextLabel={">"}
    onPageChange={onPageChange}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel={"<"}
    renderOnZeroPageCount={null}
    containerClassName={"mainDiv"}
    activeClassName={"activePage"}
    pageClassName={'eachLi'}
    previousClassName={"prevBtn"}
    nextClassName={"nextBtn"}
  />

   </>
  )
}

export default CustomPagination