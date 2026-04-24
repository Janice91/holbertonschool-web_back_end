#!/usr/bin/env python3
"""Module that contains a function to insert a document in a collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in a collection based on kwargs.

    Args:
        mongo_collection: the pymongo collection object
        **kwargs: the document fields

    Returns:
        the new document _id
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
