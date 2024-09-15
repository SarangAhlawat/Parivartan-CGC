# Parivartan-CGC
.main-section{
    opacity: 0;
    /* Initially hidden */
    transform: scale(0.8);
    /* Initially scaled down */
    transition: opacity 1s ease-out, transform 0.8s ease-out;
    /* Ensure smooth transition */
}

/* Ensure sections are not shown by default */
.main-section.hidden {
    display: none;
}