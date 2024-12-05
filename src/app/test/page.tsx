'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthUserContext';

const LoggedIn = () => {
  const { authUser, loading} = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!authUser)
      router.push('/')
  }, [authUser])

  return (
    <div>

        {
          loading ?
            <div>
              <span>Loading....</span>
            </div> :
            <>
              <div>
                <span>
                  { authUser && <div>Congratulations {authUser}! You are logged in.</div> }
                </span>
              </div>
              <div>
                <span>
                  {/** Sign out button here**/}                
                </span>
              </div>
            </>
        }
    </div>
  )
}

export default LoggedIn;