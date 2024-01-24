import { Button, Input, Typography } from "@material-tailwind/react";

export default function Header() {

    //

    const url = 'https://i.ibb.co/txMTSFQ/Untitled-design-12.jpg'

    return (
        <div className="hero flex justify-center bg-no-repeat bg-cover bg-center items-center min-h-[80svh]" style={{ backgroundImage: `url(${url})` }}>
            <div className="hero-content text-center text-neutral-content px-4 min-h-[80svh] w-full flex justify-center items-center backdrop-brightness-50">
                <div className="max-w-xl flex flex-col items-center space-y-3">
                    <Typography variant="h2" color="white" >Discover a place
                        you'll love to live</Typography>
                    {/* <Typography variant="paragraph" className="font-medium text-gray-400"></Typography>
                     */}

                    <div className="relative flex w-full max-w-[24rem]">
                        <Input
                            type="search"
                            color="white"
                            label="Search Your Favorite Place"
                            className="pr-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <Button size="sm" className="!absolute right-1 top-1 rounded">
                            Search
                        </Button>
                    </div>
                   
                {/* <Link to="/allTest"><Button color="green" className="mt-3">Get Start</Button></Link> */}
                </div>

            </div>
        </div>
       
    )
}