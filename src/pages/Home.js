import React from 'react';
import useStarship from "../context/StarshipContext";
import StarshipList from '../components/StarshipList';
import Form from '../components/Form';
import bg from '../assets/bg.png';


function Home() {
  const { search } = useStarship();
  return (
    <div className=''>
      <Form/>
      {search ? (
        <StarshipList />
      ) : (
        <section className='container mx-auto my-auto flex justify-center w-full mt-20'>
          <img
            priority
            src={bg}
            alt='Background'
            className=''
          />
        </section>
      )}
      
    </div>
  )
}

export default Home