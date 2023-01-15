export const mainHeading1 = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 1,
    },
  },
};

export const mainHeading2 = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 1,
    },
  },
};

export const mainHeading3 = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 1,
    },
  },
};

export const firstHeading = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

export const secondHeading = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.45,
        ease: "easeOut",
      },
    }),
  };

export const thirdHeading = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: "easeOut",
      },
    }),
  };