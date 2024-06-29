import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { useNavigate, Link } from "react-router-dom";

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  // function createMarkup(c) {
  //   return { __html: c };
  // }

  function createMarkup(content) {
    const words = content.split(" ");
    if (words.length > 20) {
      return { __html: words.slice(0, 10).join(" ") + "..." };
    }
    return { __html: content };
  }

  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5  py-10  mx-auto max-w-7xl ">
          {/* Main Content  */}
          <div className="flex  flex-wrap justify-around  mb-5 gap-10 md:h-[500px]">
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
                      <div className="w-full h-60 bg-contain p-5 flex justify-center items-center">
                        {/* Blog Thumbnail */}
                        <img
                          onClick={() => navigate(`/bloginfo/${item.id}`)}
                          className="w-full h-full object-cover"
                          src={item.thumbnail}
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
                          {item?.blogs?.title}
                        </h1>

                        <div className="content">
                          <div
                            className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5 
                        ${
                          mode === "dark"
                            ? "[&>h1]:text-[#ff4d4d]"
                            : "[&>h1]:text-black"
                        }

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h2]:text-white"
                            : "[&>h2]:text-black"
                        }

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h3]:text-white"
                            : "[&>h3]:text-black"
                        }

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h4]:text-white"
                            : "[&>h4]:text-black"
                        }

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h5]:text-white"
                            : "[&>h5]:text-black"
                        }

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h6]:text-white"
                            : "[&>h6]:text-black"
                        }

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        ${
                          mode === "dark"
                            ? "[&>p]:text-[#7efff5]"
                            : "[&>p]:text-black"
                        }

                        [&>ul]:list-disc [&>ul]:mb-2
                        ${
                          mode === "dark"
                            ? "[&>ul]:text-white"
                            : "[&>ul]:text-black"
                        }

                        [&>ol]:list-decimal [&>li]:mb-10
                        ${
                          mode === "dark"
                            ? "[&>ol]:text-white"
                            : "[&>ol]:text-black"
                        }

                        [&>li]:list-decimal [&>ol]:mb-2
                        ${
                          mode === "dark"
                            ? "[&>ol]:text-white"
                            : "[&>ol]:text-black"
                        }

                        [&>img]:rounded-lg
                        `}
                            dangerouslySetInnerHTML={createMarkup(
                              item?.blogs?.content
                            )}
                          ></div>
                        </div>

                        {/* Blog Description  */}
                        {/* <span
                          className="leading-relaxed mb-3"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          {item.blogs.content} */}
                        {/* Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. */}
                        {/* </span> */}
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
