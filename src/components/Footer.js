import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <a href="mailto:gustavochiqui@gmail.com" className="text-sm hover:underline">
          gustavochiqui@gmail.com
        </a>
        <div className="social flex justify-center gap-4 my-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/facebook-icon.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/twitter-icon.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/github-icon.svg" alt="GitHub" width={24} height={24} />
          </a>
        </div>
        <p className="text-sm">
          Copyright @ Gustavo Chiquitin 2025, Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}