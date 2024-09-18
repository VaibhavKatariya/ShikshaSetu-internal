import "./globals.css";

export const metadata = {
  title: "Async Crew",
  description: "Learning Dashboard.",
  creator: "Team Async Crew",
  contributor: "Vaibhav Katariya",
  contributor: "Yasharth Singh",
  contributor: "Dishita Saxena",
  contributor: "Himanshu Singh",
  contributor: "Saumya Agarwal",
  contributor: "Divyansh Singh"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
