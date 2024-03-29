import {
    Card,
    CardBody,
    CardHeader,
    Chip,
    Typography
} from "@material-tailwind/react";
import offerImage from '../../assets/discount.png';

export default function Discount() {
    

    return (
        <div className="px-6 md:-translate-y-20">
            <Card className="w-full flex mx-auto items-center my-10 md:my-0 max-w-[48rem] md:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0  rounded-r-none flex justify-end"
                >
                    <img
                        src={offerImage}
                        alt="card-image"
                        className="w-40 object-cover"
                    />
                </CardHeader>

                <CardBody className="flex-1 flex justify-center  items-center">

                    <div className="flex items-center flex-col" >
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Purchase TK 200 or
                            above & get 20% off
                        </Typography>
                        <div className="flex items-center mb-8 gap-2">
                            <Typography color="gray" className=" font-normal">
                                Use Promo Code
                            </Typography>
                            <Chip color="green" value="300"></Chip>
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>

    );
}