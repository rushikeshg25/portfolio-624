export default function Footer() {
  return (
    <footer className='w-full py-6 bg-transparent md:py-8'>
      <div className='container flex flex-col items-center justify-between max-w-5xl gap-4 md:flex-row'>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-muted-foreground'>
            Rushikesh Ghotekar
          </span>
        </div>

        <p className='text-xs text-muted-foreground'>
          &copy; 2024 Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
