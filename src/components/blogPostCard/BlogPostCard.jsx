import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { useNavigate, Link } from "react-router-dom";

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5  py-10 mx-auto max-w-7xl ">
          {/* Main Content  */}
          <div className="flex  flex-wrap justify-around  mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0 ? (
              <>
                {" "}
                {getAllBlog.map((item, index) => {
                  const { thumbnail, date, id } = item;
                  return (
                    <div
                      style={{
                        background:
                          mode === "dark" ? "rgb(30, 41, 59)" : "white",
                        borderBottom:
                          mode === "dark"
                            ? " 4px solid rgb(226, 232, 240)"
                            : " 4px solid rgb(30, 41, 59)",
                      }}
                      className={`h-full shadow-lg w-96 hover:-translate-y-1 py-10  center cursor-pointer hover:shadow-gray-400
              ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
              rounded-xl overflow-hidden`}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        {/* Blog Thumbnail  */}
                        <img
                          onClick={() => navigate(`/bloginfo/${id}`)}
                          className="w-72 "
                          src={thumbnail}
                          alt="blog"
                        />
                      </div>

                      {/* Top Items  */}
                      <div className="p-6">
                        {/* Blog Date  */}
                        <h2
                          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          {date}
                        </h2>

                        {/* Blog Title  */}
                        <h1
                          className="title-font text-lg font-bold text-gray-900 mb-3"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          {item.blogs.title}
                        </h1>

                        {/* Blog Description  */}
                        <div
                          className="leading-relaxed mb-3"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          {item.blogs.content}
                          {/* Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. */}
                        </div>
                      </div>
                    </div>
                  );
                })}{" "}
              </>
            ) : (
              <>
                {" "}
                <h1>Not Found</h1>
              </>
            )}
          </div>

          <div className="flex justify-center my-5">
            <Link to={"/allblogs"}>
              <Button
                style={{
                  background:
                    mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                  color:
                    mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
                }}
              >
                See More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
