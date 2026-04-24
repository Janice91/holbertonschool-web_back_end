#!/usr/bin/env python3
"""Module that contains a function to update school topics."""


def update_topics(mongo_collection, name, topics):
    """Change all topics of a school document based on the name.

    Args:
        mongo_collection: the pymongo collection object
        name: the school name to update
        topics: the list of topics to set

    Returns:
        None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
