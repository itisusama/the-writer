import { ui } from "@/barrel/ui"

const Browse = () => {
  const genres = ['All', 'Fantasy', 'Sci-Fi', 'Romance', 'Mystery', 'Horror', 'Thriller', 'Historical', 'Adventure', 'Young Adult'];
  return (
    <div className="min-h-screen pt-20">
      <ui.BrowseHeader/>
      <ui.GenrePills genres={genres} />
    </div>
  )
}

export default Browse
