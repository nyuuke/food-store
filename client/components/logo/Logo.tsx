import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button)`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  align-items: center;
  justify-content: center;
`

const Svg = styled.svg`
  height: ${(props) => props.theme.units._48};
`

const Path = styled.path`
  fill: ${({ theme }) => theme.accent.accent_color_3};
`

const Logo: FC = () => {
  return (
    <Link href={'/'} passHref>
      <Button whileTap={{ scale: 0.9 }}>
        <Svg
          viewBox='0 0 136 171'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <Path d='M58.2 1.8C48.1 5.39999 38.9 16 37.2 26.1L36.4 30.5L18.7 30.8C2.4 31 0.900003 31.2 1.4 32.8C5.1 45.8 6.4 49.3 9.1 53.3C10.8 55.9 14.4 60 17.2 62.4C23.1 67.6 37.3 75.2 45.3 77.5L51.1 79.2L61.7 71.5C71.8 64.2 75.7 62.7 76.7 65.7C76.9 66.3 75.5 68.6 73.6 70.8C71.6 72.9 70.3 74.9 70.5 75.2C70.8 75.5 76.3 74.2 82.6 72.3C91.4 69.7 94.5 69.1 95.4 70C97 71.7 94.2 73.5 84.9 76.5C80.6 78 76.8 79.6 76.5 80.1C75.7 81.2 76.2 81.2 87.5 79.9C92.6 79.2 97.6 79 98.5 79.4C102 80.7 98 82.7 88.5 84.5C83.3 85.5 79 86.7 79 87.2C79 87.6 82.8 88 87.5 88C94 88 96 88.3 96 89.4C96 90.8 93.2 91.4 81.3 92.6C77.3 92.9 74 93.6 74 94.1C74 94.5 76.6 95.1 79.8 95.5C82.9 95.8 86.2 96.2 87 96.3C87.8 96.4 88.6 97.3 88.8 98.3C89.1 99.8 88 100 76.7 100C58.9 100 43.6 96.9 22.3 88.9C18.8 87.7 15.9 86.8 15.6 87.1C15.4 87.3 13.6 97.2 11.6 109C7.1 135.5 2.2 163.8 1.4 167.9L0.800003 171H67.9H135.1L134.4 168.7C134 167.5 131.3 158.6 128.3 149C125.4 139.4 122.8 131 122.5 130.3C122.2 129.5 119.1 130.5 112.8 133.4C92.4 143 74.8 147.3 55.5 147.4C44.6 147.5 42.5 147.3 42.5 146C42.5 144.9 44.3 144.3 49.8 143.7C53.7 143.2 57 142.4 57 142C57 141.5 54 140.9 50.3 140.5C37.4 139.4 34.9 138.9 35.3 137.7C35.5 136.9 38.7 136.4 43.8 136.2C48.3 136 52 135.5 52 135.1C52 134.6 47.5 133.4 42 132.5C33.3 130.9 32 130.4 32 128.7C32 126.9 32.5 126.8 39.8 127.4C44 127.8 49 128.4 50.8 128.7C57.4 129.8 53.8 127.1 44.5 124C35.8 121.1 33.2 119.2 35.9 117.6C36.3 117.3 41.8 118.4 48 120.1C54.2 121.7 59.5 122.8 59.8 122.5C60.1 122.2 58.9 120.5 57.2 118.7C53.8 115.2 53.1 112.3 55.5 111.4C56.3 111 61.6 114 68.1 118.5L79.3 126.2L83.9 125C93.3 122.6 113.3 110.9 118.5 104.8C124.4 97.7 125.4 94.1 131.4 54C132.8 44.9 134.2 36 134.6 34.2L135.3 31H118.1H101V27.7C101 22.9 95.5 12.6 90.8 8.59999C81.6 0.699997 68.9 -2 58.2 1.8ZM79.3 14.2C84 16.8 88.7 23 89.6 27.7L90.3 31H69.1C45.3 31 46.3 31.4 49.9 23.4C54.8 12.5 68.5 8.3 79.3 14.2Z' />
        </Svg>
      </Button>
    </Link>
  )
}

export default Logo
