function DarkTheme() {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgb(29, 28, 28);
        --link-color: rgb(255, 153, 0);
        --text-color: rgba(255, 255, 255, 0.889);
      }
    `}</style>
  );
}

export default DarkTheme;