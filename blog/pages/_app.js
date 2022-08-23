function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  console.log('MyApp Running');
  return <SafeHydrate><Component {...pageProps} /></SafeHydrate>;
}

export default MyApp;