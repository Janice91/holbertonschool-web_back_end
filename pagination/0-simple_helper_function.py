#!/usr/bin/env python3
"""Module that contains a simple helper function for pagination."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple of start and end indexes for pagination.

    Args:
        page: the page number (1-indexed)
        page_size: the number of items per page

    Returns:
        a tuple of (start_index, end_index)
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
