"use client"
import { useParams } from 'next/navigation'

const User = () => {
  const params = useParams()
  console.log(params);

  return (
    <section>
      <h2>userId:{params.id}</h2>
    </section>
  )
}

export default User