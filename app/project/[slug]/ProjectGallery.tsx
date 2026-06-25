"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import ModalSlider from "@/components/ModalSlider";
import PageLayout from "@/components/PageLayout";
import "photoswipe/dist/photoswipe.css";

type ProjectImage = {
  id: number;
  url: string;
  name: string;
  width: number;
  height: number;
};

type Project = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: { url: string; width: number; height: number; formats: Record<string, unknown> };
  images: ProjectImage[];
};

export default function ProjectGallery({ project }: { project: Project }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <PageLayout>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:grid grid-cols-4 gap-6">
            <div>
              <h3 className="text-2xl">{project.name}</h3>
              <p className="text-sm my-5 md:mt-10 break-words text-gray-500">
                {project.description}
              </p>
            </div>
            <div className="col-span-3">
              <Gallery>
                <Masonry
                  breakpointCols={3}
                  columnClassName="my-masonry-grid_column"
                  className="my-masonry-grid"
                >
                  {project.images.map((item) => (
                    <Item
                      original={item.url}
                      thumbnail={item.url}
                      key={item.id}
                      width={item.width}
                      height={item.height}
                    >
                      {({ ref, open }) => (
                        <div className="galerry-item grid-item">
                          <img
                            ref={ref as React.Ref<HTMLImageElement>}
                            onClick={open}
                            src={item.url}
                            alt={item.name}
                            className="w-full"
                          />
                        </div>
                      )}
                    </Item>
                  ))}
                </Masonry>
              </Gallery>
            </div>
          </div>
        </div>
      </div>
      <ModalSlider
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
        images={project.images}
      />
    </PageLayout>
  );
}
