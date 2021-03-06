import { FC } from 'react'
import { GithubIcon } from './icon/GithubIcon'
import { TwitterIcon } from './icon/TwitterIcon'

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="px-6 py-4">
        <div className="text-gray-300 text-teal-900 font-bold text-2xl mb-2">makomakok.dev</div>
        <div className="text-gray-300 text-teal-900 font-bold text-xl mt-2 mb-2">Follow Me</div>
        <div className="flex flex-wrap justify">
          <GithubIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="text-gray-300 text-xs text-center text-teal-900 mt-5">
        © 2021, Built with Next.js.
        <br />
        Created by Makoto Kobayashi.
      </div>
    </footer>
  )
}
