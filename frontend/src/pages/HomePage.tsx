import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api'

function HomePage() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  const {isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  })

  const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

  useEffect(() => {
    console.log(search)
  }, [debounced, search])
  
  const clickHandler = (username: string) => {
    fetchRepos(username)
  }

  return (
    <div id='main' className='flex justify-center p-2 bg-slate-300 w-full h-screen text-center'>
      {isError && <p className='text-center text-red-500'>Something went wrong</p>}
      <div className='relative max-w-[1240px] w-full mx-auto p-2 '>
        <h1>Welcome, USER</h1>
        
        <input 
          type='text'
          className='border py-2 px-4 h-[42px] mb-20'
          placeholder='Search for Github username'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />

        {/* { isLoading ? <p>Loading...</p> : (
          data?.map(user => {
            return (
              <p 
                key={user.id} 
                onClick={() => clickHandler(user.login)}
                className='text-slate-800 hover:text-red-800'
              >
                  {user.login}
              </p>
            )
          })
        )
        } */}
        <div className='container'>
          {areReposLoading && <p>Repos are loading</p>}
          {repos?.map(repo => {
            return (
              <p key={repo.id}>{repo.url}</p>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default HomePage