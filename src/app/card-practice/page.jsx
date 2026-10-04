"use client"



import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"



export default function CardSpacing() {
    const [like, setLike] = useState(false)

    return (
        <div className="mx-auto grid w-full max-w-sm  p-6">
            <Card>
                <CardHeader >
                    <div className='flex gap-3 '>
                        <div>
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <CardTitle>Azam Bukhari</CardTitle>
                            <CardDescription>posted 2h ago</CardDescription>
                        </div>
                    </div>
                    <CardAction>
                        <button onClick={() => setLike(!like)}
                            >
                            <Button className={like ? "bg-red-500 text-2xl p-3 text-pink-300 hover:bg-red-500" : "text-red-900"} variant="outline">
                                ꨄ︎
                            </Button>
                        </button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
                    <p className="text[10px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi cumque sunt consequuntur, vitae repudiandae?</p>
                    <div className=" flex mt-3 gap-2">
                        <Button className='bg-sky-100' variant="outline">SMM</Button>
                        <Button className='bg-sky-100' variant="outline">GROUGTH</Button>
                        <Button className='bg-sky-100' variant="outline">SMS</Button>
                        <Button className='bg-sky-100' variant="outline">BRAND</Button>
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                    <h1 className="text-4xl text-left">$150-$200/h</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <Button type="submit" size="lg" className="w-full py-5 bg-blue-500">
                        ⚡︎ Apply
                    </Button>
                </CardFooter>
            </Card>

            {/* <Card className={selectedSpacing?.className}>
        <CardHeader>
          <CardTitle>Azam Bukhari</CardTitle>

          <CardDescription>
            posted 2h ago
          </CardDescription>

          <CardAction>
            <Button className='text-red-900' variant="outline">
            ꨄ︎
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi cumque sunt consequuntur, vitae repudiandae?</p>
        </CardContent>
        <div className=" ml-3.5 flex gap-2">
            <Button className='bg-blue-200' variant="outline">SMS</Button>
            <Button className='bg-blue-200' variant="outline">SMS</Button>
            <Button className='bg-blue-200' variant="outline">SMS</Button>
            <Button className='bg-blue-200' variant="outline">BRAND</Button>
        </div>

        <CardFooter className="flex-col items-start gap-2">
            <h1 className="text-5xl text-left">$150-$200/h</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <Button type="submit" className="w-full bg-blue-500">
            Login
          </Button>

        </CardFooter>
      </Card> */}
        </div>
    )
}