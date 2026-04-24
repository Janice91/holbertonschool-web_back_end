#!/usr/bin/env python3
"""Module that contains a function to list all documents in a collection."""


def list_all(mongo_collection):
    """List all documents in a collection.

    Args:
        mongo_collection: the pymongo collection object

    Returns:
        a list of all documents, or empty list if none
    """
    documents = list(mongo_collection.find())
    if not documents:
        return []
    return documents
