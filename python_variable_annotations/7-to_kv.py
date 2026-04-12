#!/usr/bin/env python3
"""Module that contains a type-annotated to_kv function."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of a string and the square of an int or float."""
    return (k, float(v ** 2))
