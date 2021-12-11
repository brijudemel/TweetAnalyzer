import * as React from 'react';
import Link from '@mui/material/Link';
import Image from "next/image"
function Header() {
  return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className=" flex items-center">
                <Image alt="Logo" src="http://static.dezeen.com/uploads/2012/06/dezeen_twitter-bird.gif" width={40} height={40} className="logo" />
                <Link
                    variant="h1"
                    underline="none"
                    color="#1f9aff"
                    sx={{ fontSize: 40,fontWeight:400,marginLeft:2,fontStyle:"normal",fontFamily:"-moz-initial" }}
                >
                    {'Tweet Sentiment Analyzer'}
              </Link>
            </div>
        </div>
  );
}

export default Header;
