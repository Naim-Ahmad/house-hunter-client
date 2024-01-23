console.log(import.meta.env.PROD ? import.meta.env.VITE_BASEURL_PROD: import.meta.env.VITE_BASEURL_DEV)
export default function HomeRoot() {

  return (
    <div>HomeRoot</div>
  )
}