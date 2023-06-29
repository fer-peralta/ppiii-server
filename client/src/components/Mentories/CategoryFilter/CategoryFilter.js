import { useState, useEffect, useCallback } from 'react'

export const CategoryFilter = ({ mentories, setGetData }) => {
  const [areaSelected, setAreaSelected] = useState({
    'Análisis de Sistemas': false,
    General: false,
    'Seguridad e Higiene': false
  })
  const [modalitySelected, setModalitySelected] = useState({
    Presencial: false,
    Virtual: false,
    Asíncrona: false
  })

  const [dataFiltered, setDataFiltered] = useState([])

  const allFalse = useCallback(() => {
    let resultArea = false
    let resultModality = false
    for (const [key, value] of Object.entries(areaSelected)) {
      if (value === true) {
        resultArea = true
      }
    }
    for (const [key, value] of Object.entries(modalitySelected)) {
      if (value === true) {
        resultModality = true
      }
    }
    let result = resultArea && resultModality

    return result
  }, [areaSelected, modalitySelected])
  // }, [areaSelected, modalitySelected])

  const handleCategory = e => {
    let newArray = []
    setAreaSelected({ ...areaSelected, [e.target.value]: e.target.checked })
    setModalitySelected({
      ...modalitySelected,
      [e.target.value]: e.target.checked
    })
    allFalse()
    if (e.target.checked) {
      const result = mentories.filter(
        mentory => mentory.area === e.target.value
      )

      // TODO make more filters

      // const resultModality = mentories.filter(
      //   mentory => mentory.modality === e.target.value
      // )
      // newArray = resultArea.concat(resultModality)
      // console.log(newArray, 'concat')
      // let filteredArray = newArray.filter((item, index) => {
      //   return newArray.indexOf(item) === index
      // })
      // console.log(filteredArray)
      // let doubleFilter = filteredArray.filter(item =>
      //   console.log(
      //     item.area === e.target.value && item.modality === e.target.value
      //   )
      // )
      // console.log(doubleFilter)
      // setDataFiltered([...dataFiltered, ...resultArea, ...resultModality])
      setDataFiltered([...dataFiltered, ...result])
    } else {
      const resultArea = dataFiltered.filter(
        mentory => mentory.area !== e.target.value
      )
      // const resultModality = dataFiltered.filter(
      //   mentory => mentory.modality !== e.target.value
      // )
      // newArray = resultArea.concat(resultModality)
      // let filteredArray = newArray.filter((item, index) => {
      //   return newArray.indexOf(item) === index
      // })
      // setDataFiltered([...filteredArray])
      setDataFiltered([...resultArea])
    }
  }

  useEffect(() => {
    allFalse()
    if (allFalse() === false) {
      return setGetData(mentories)
    }
    setGetData(dataFiltered)
  }, [dataFiltered, setGetData, mentories, allFalse])

  return (
    <>
      <div className='categories-container'>
        <div className='area-categories-container'>
          <h3>Área</h3>
          <ul>
            <li>
              <input
                onChange={handleCategory}
                type='checkbox'
                name='area'
                value='Análisis de Sistemas'
                id='aDSistemasCBox'
              />
              <label htmlFor='aDSistemasCBox'>Análisis de sistemas</label>
            </li>
            <li>
              <input
                onChange={handleCategory}
                type='checkbox'
                name='area'
                value='Seguridad e Higiene'
                id='sEHigieneBox'
              />
              <label htmlFor='sEHigieneBox'>Seguridad e higiene</label>
            </li>
            <li>
              <input
                onChange={handleCategory}
                type='checkbox'
                name='area'
                value='General'
                id='generalCBox'
              />
              <label htmlFor='generalCBox'>General</label>
            </li>
          </ul>
        </div>
        {/* <div className='modality-categories-container'>
          <h3>Modalidad</h3>
          <ul>
            <li>
              <input
                onChange={handleCategory}
                type='checkbox'
                name='modality'
                value='Presencial'
                id='presencialCBox'
              />
              <label htmlFor='presencialCBox'>Presencial</label>
            </li>
            <li>
              <input
                onChange={handleCategory}
                type='checkbox'
                name='modality'
                value='Virtual'
                id='virtualBox'
              />
              <label htmlFor='virtualBox'>Virtual</label>
            </li>
            <li>
              <input
                onChange={handleCategory}
                type='checkbox'
                name='modality'
                value='Asíncrona'
                id='asincronaCBox'
              />
              <label htmlFor='asincronaCBox'>Asíncrona</label>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  )
}
