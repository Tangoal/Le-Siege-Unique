import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./SelleriePhotos";
import './Gallery.css'

export default function GallerySieges() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <section id="gallery">
                <div className="gallery-bg">
                    <div className="gallery-section">
                        
                            <h2>Sellerie</h2>
                            <div className="gallery-content">
                            <Gallery photos={photos} onClick={openLightbox} />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                            currentIndex={currentImage}
                                            views={photos.map(x => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}