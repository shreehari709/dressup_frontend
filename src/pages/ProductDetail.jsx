import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/Product";
import AddToCartButton from "../components/AddToCartButton";
import SizeChart from "../components/SizeChart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
const [currentImage, setCurrentImage] = useState(0);
  const product = products.find(
    (item) => item.id === Number(id)
  );
useEffect(() => {
  setCurrentImage(0);
}, [product]);
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["S", "M", "L", "XL"];

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        Product Not Found
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        paddingBottom: 120,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            border: "none",
            background: "white",
            width: 38,
            height: 38,
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          ←
        </button>

        <h3
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Product Detail
        </h3>

        <div style={{ width: 38 }} />
      </div>

      {/* Product Card */}
      <div
        style={{
          margin: "0 16px",
          background: "#fff",
          borderRadius: 28,
          padding: 16,
          boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Product Image */}
    {/* <div
  style={{
    position: "relative",
    background: "#f3f3f3",
    borderRadius: 24,
    overflow: "hidden",
    height: 480,
  }}
>
  <img
    src={product.images[currentImage]}
    alt={product.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  /> */}

  {/* Previous Button */}
  {/* {product.images.length > 1 && (
    <button
      onClick={() =>
        setCurrentImage((prev) =>
          prev === 0
            ? product.images.length - 1
            : prev - 1
        )
      }
      style={{
        position: "absolute",
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.8)",
        cursor: "pointer",
        fontSize: 20,
      }}
    >
      ❮
    </button>
  )} */}

  {/* Next Button */}
  {/* {product.images.length > 1 && (
    <button
      onClick={() =>
        setCurrentImage((prev) =>
          prev === product.images.length - 1
            ? 0
            : prev + 1
        )
      }
      style={{
        position: "absolute",
        right: 10,
        top: "50%",
        transform: "translateY(-50%)",
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.8)",
        cursor: "pointer",
        fontSize: 20,
      }}
    >
      ❯
    </button>
  )}
</div> */}

<Swiper
  spaceBetween={0}
  slidesPerView={1}
>
  {product.images.map((img, index) => (
    <SwiperSlide key={index}>
      <div
  style={{
    width: "100%",
    aspectRatio: "4 / 5",
    overflow: "hidden",
    borderRadius: 24,
    background: "#f3f3f3",
  }}
>
  <img
    src={img}
    alt={product.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>
    </SwiperSlide>
  ))}
</Swiper>


{/* Thumbnail Images */}
{/* <div
  style={{
    display: "flex",
    gap: 10,
    marginTop: 12,
    overflowX: "auto",
  }}
>
  {product.images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`thumb-${index}`}
      onClick={() => setCurrentImage(index)}
      style={{
        width: 70,
        height: 70,
        objectFit: "cover",
        borderRadius: 12,
        cursor: "pointer",
        border:
          currentImage === index
            ? "2px solid black"
            : "2px solid #eee",
      }}
    />
  ))}
</div> */}



        {/* Product Info */}
        <div style={{ marginTop: 18 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 800,
              color: "#111",
            }}
          >
            {product.name}
          </h2>

          <p
            style={{
              color: "#666",
              marginTop: 6,
              fontSize: 14,
            }}
          >
            {product.category}
          </p>

          {/* Rating */}
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
            }}
          >
            <span style={{ color: "#f5a623" }}>★★★★★</span>

            <span
              style={{
                fontSize: 13,
                color: "#666",
              }}
            >
              {product.rating} ({product.reviews} Reviews)
            </span>
          </div> */}

          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 16,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#111",
              }}
            >
              ₹{product.price}
            </span>

            <span
              style={{
                textDecoration: "line-through",
                color: "#999",
                fontSize: 16,
              }}
            >
              ₹{product.originalPrice}
            </span>
          </div>

          {/* Description */}
          <div style={{ marginTop: 24 }}>
            <h4
              style={{
                marginBottom: 8,
                fontSize: 18,
              }}
            >
              Description
            </h4>

            <p
              style={{
                color: "#777",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              Premium quality {product.category.toLowerCase()} made
              with modern design and comfortable fabric.
            </p>
          </div>



           

          {/* Size Selector */}
          <div style={{ marginTop: 24 }}>
            <h4
              style={{
                marginBottom: 12,
                fontSize: 18,
              }}
            >
              Select Size
            </h4>

            <div
              style={{
                display: "flex",
                gap: 12,
              }}
            >
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    border:
                      selectedSize === size
                        ? "2px solid black"
                        : "1px solid #ddd",
                    background:
                      selectedSize === size
                        ? "#111"
                        : "white",
                    color:
                      selectedSize === size
                        ? "white"
                        : "#111",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        {/* Bottom Add To Cart */}
      <div
        style={{
            marginTop: 40,
          position: "sticky",
          bottom: 20,
          left: 16,
          right: 16,
        }}
      >
        <AddToCartButton
          product={product}
          selectedSize={selectedSize}
        />
      </div>

      </div>

          <div>
      {/* Product Details */}

      <SizeChart />
    </div>

    </div>
  );
}