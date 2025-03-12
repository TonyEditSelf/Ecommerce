import TopNav from '../src/comps/TopNav.jsx'
import SideNav from './comps/sidenav/SideNav.jsx'
// import FilterBar from './comps/FilterBar.jsx'
import CardSpace from './comps/cards/CardSpace.jsx'
// import Footer from './comps/Footer.jsx'

const App = () => {
  return (
    <div className='bg-[#f5f5f5] dark:bg-[#1e2021] '>
      <nav>
        <TopNav />
      </nav>

      <main className='w-full flex lg:gap-3 px-6 sm:px-5'>

        <div className='sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-5/12 3xl:w-2/12'>
          <SideNav />
        </div>

        <div className='flex-grow mb-24 mr-5'>
          <CardSpace />
        </div>
      </main>

    </div >
  )
}

export default App