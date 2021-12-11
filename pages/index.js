import Header from '../components/Header'
import Search from '../components/Search'
import TweetList from '../components/TweetList'
import { DataProvider } from '../components/DataProvider'
export default function Home() {
  return (
    <div>
      <DataProvider>
        <Header />
        <Search />
        <TweetList />
      </DataProvider>
    </div>
  )
}
