import { NextResponse } from 'next/server';

const locales = ['en', 'zh'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, API routes, and Next.js internals
  if (
    pathname.match(/\.(png|jpe?g|gif|webp|svg|ico|xml|txt)$/) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  // You can preserve the query params
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
