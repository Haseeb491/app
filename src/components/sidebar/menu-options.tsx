'use client';
import { AgencySidebarOption, SubAccount, SubAccountSidebarOption } from '@prisma/client'
import React, { useEffect, useMemo, useState } from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { ChevronDown, ChevronsUpDown, Compass, Menu } from 'lucide-react';
import clsx from 'clsx';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import { Popover, PopoverTrigger } from '../ui/popover';

type Props = {
    defaultOpen?: boolean
    subAccounts : SubAccount[]
    sidebarOpt : AgencySidebarOption[] | SubAccountSidebarOption[]
    sidebarLogo : string
    details : any 
    user : any
    id : string
}

const MenuOptions = (
    {
    defaultOpen,
    subAccounts,
    sidebarOpt,
    sidebarLogo,
    details,
    user,
    id
    }
    : Props) => {

      const [isMounted,setIsMounted] = useState(false);

      const openState = useMemo(()=>
        (defaultOpen? {open : true} : {})
      ,[defaultOpen])

      useEffect(()=>{
        setIsMounted(true);
      },[])

      if(!isMounted) return
  return (
      <Sheet modal={false}
      open = {true}
      // {...openState}
       >
        <SheetTrigger asChild 
          className='absolute left-4 top-4 z-[100] md:!hidden flex'
        >
          <Button
            variant={'outline'}
            size={'icon'}
          >
            <Menu/>
          </Button>
        </SheetTrigger>
        <SheetContent
          showX = {!defaultOpen}
          side={'left'}
          className={clsx(
            'bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6',
            {'hidden md:inline-block z-0 w-[500px]' : defaultOpen,
              'inline-block md:hidden z-[100] w-full' :!defaultOpen
            }
          )}
        >
          <div className="">
            <AspectRatio
              ratio={16/5}
            >
              <Image 
                src={sidebarLogo} alt='sidebar logo' fill className='rounded-md object-contain'
              />
            </AspectRatio>
            <Popover>
              <PopoverTrigger asChild >
                <Button 
                  className='w-full my-6 flex items-center justify-between py-8'
                  variant={'ghost'}
                >
                  <div className="flex items-center text-left gap-2">
                    <Compass/>
                    <div className="flex flex-col">{details.name}
                      <span className='text-muted-foreground text-wrap' >{details.address}</span>
                    </div>
                  </div>
                  <div className="">
                    <ChevronsUpDown size={16} className='text-muted-foreground' />
                  </div>
                </Button>
              </PopoverTrigger>
            </Popover>
          </div>
        </SheetContent>
      </Sheet>
  )
}

export default MenuOptions