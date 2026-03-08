import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-full border-t">
            <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-2">
                    <Link to="/" className="flex gap-2 items-center">
                        <h2 className="text-lg font-bold">The Writer</h2>
                    </Link>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Share progress publicly. Keep your fans aligned.
                </p>
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} The Writer
                </p>
            </div>
        </footer>
    )
}

export default Footer